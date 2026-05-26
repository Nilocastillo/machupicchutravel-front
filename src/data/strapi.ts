/**
 * Servicio de conexión ultra-eficiente con Strapi v5 para Astro
 * Este archivo se ejecuta únicamente en tiempo de compilación (Server-side/Build time)
 * evitando exponer tokens y URLs del CMS en el cliente.
 */

// Tipados de la API de Strapi v5
export interface StrapiHero {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface StrapiHomeData {
  id: number;
  documentId: string;
  hero?: StrapiHero;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface StrapiTourCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: any;
  featuredImage?: {
    id: number;
    url: string;
    alternativeText?: string;
    name?: string;
  };
}

export interface StrapiResponse<T> {
  data: T | null;
  meta: Record<string, any>;
}

// Variables de entorno cargadas del servidor
const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = import.meta.env.STRAPI_API_TOKEN;

/**
 * Cliente Fetch optimizado para Strapi v5
 */
export async function fetchStrapi<T>(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<StrapiResponse<T>> {
  try {
    const url = new URL(`${STRAPI_URL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`);
    
    // Añadimos parámetros opcionales (ej. locale)
    Object.entries(params).forEach(([key, val]) => {
      if (val) url.searchParams.append(key, val);
    });

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (STRAPI_API_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
    }

    const response = await fetch(url.toString(), {
      headers,
      // Desactivamos el cache del fetch nativo en desarrollo, pero dejamos que Astro optimice en producción
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Error en petición a Strapi (${response.status}): ${response.statusText}`);
    }

    const json = await response.json();
    return json as StrapiResponse<T>;
  } catch (error) {
    console.error(`[Strapi Connection Error]:`, error);
    // Retornamos una respuesta vacía limpia en lugar de romper el build entero
    return { data: null, meta: {} };
  }
}

/**
 * Recupera los datos de la página Home optimizados por el middleware
 */
export async function getHomeData(locale = 'es'): Promise<StrapiHomeData | null> {
  // Nota: El middleware en Strapi se encarga del populate y selección automática de campos.
  // El frontend no tiene que inyectar parámetros de query complejos, manteniendo el fetch súper limpio.
  const response = await fetchStrapi<StrapiHomeData>('/api/home', { locale });
  return response.data;
}

/**
 * Recupera las categorías de tours optimizadas desde Strapi v5
 */
export async function getTourCategories(locale = 'es'): Promise<StrapiTourCategory[]> {
  const response = await fetchStrapi<StrapiTourCategory[]>('/api/tour-categories', { locale });
  return response.data || [];
}

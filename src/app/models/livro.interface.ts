export interface Livro{

  id?: number | string;
  titulo: string;
  autor: string;
  genero?: string;
  dataPublicacao?: string;
  imagem?: string;
  status: 'LIDO' | 'LENDO' | 'QUERO_LER';
}

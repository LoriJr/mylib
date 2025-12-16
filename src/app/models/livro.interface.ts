export interface Livro{

  id?: number;
  titulo: string;
  autor: string;
  genero?: string;
  dataPublicacao?: string;
  imagem?: string;
  status: 'LIDO' | 'LENDO' | 'QUERO_LER';
}

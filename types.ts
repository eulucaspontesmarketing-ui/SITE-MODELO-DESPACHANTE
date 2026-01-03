
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export enum ServiceType {
  TRANSFER = 'Transferência de veículo',
  FINES = 'Multas',
  CNH = 'CNH',
  LICENSING = 'Licenciamento'
}

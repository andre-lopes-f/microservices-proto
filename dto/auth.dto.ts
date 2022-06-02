export class AuthenticateDto {
  token: string;
}

export class CreateAuthDto {
  name: string;
  email: string;
  telephone: string;
  document: string;
  documentType: "CPF" | "CNPJ";
  token: string;
}

export class AuthenticateResponse {
  id: string;
  uid: string;
  name: string;
  email: string;
  telephone: string;
  document: string;
  documentType: "CPF" | "CNPJ";
  createdAt: Date | string;
  updatedAt: Date | string;
}
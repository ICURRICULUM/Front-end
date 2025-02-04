export interface VerifyMailRequest {
  email: string;
  code: string;
}

export interface SendMailRequest {
  email: string;
}

export interface SendTemporaryPasswordRequest {
  email: string;
}

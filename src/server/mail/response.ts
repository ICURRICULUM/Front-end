export interface VerifyMailResponse {
  result: {
    email: string;
    check: boolean;
  };
}

export interface SendMailResponse {
  result: {
    email: string;
  };
}

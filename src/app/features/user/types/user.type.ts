export interface UserInterface {
  id: string;
  name: string;
  email: string;
  email_verified_at?: string | Date | null;
  created_at: string | Date;
  updated_at: string | Date;
}
import { User } from './user.model';

export interface Product {
  name: string;
  category: string;
  status: string;
  createdBy: User;
  createdAt: string;
}

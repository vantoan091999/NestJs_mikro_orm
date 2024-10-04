// import { EntitySchema } from '@mikro-orm/core';

// export interface baserAtribute {
//   id: number;
//   createdAt: Date;
//   updatedAt: Date;
//   deletedAt: Date;
// }

// export const base = {
//   id: { type: 'number', primary: true },
//   createdAt: { type: Date, onCreate: () => new Date() },
//   updatedAt: {
//     type: Date,
//     onCreate: () => new Date(),
//     onUpdate: () => new Date(),
//   },
//   deletedAt: { type: Date, onCreate: () => new Date() },
// };

// export interface UserInstance extends baserAtribute {
//   username: string;
//   email: string;
//   password: string;
//   is_active: boolean;
// }

// export const UserModel = new EntitySchema<UserInstance>({
//   name: 'tb_users',
//   tableName: 'tb_users',
//   properties: {
//     ...base,
//     username: { type: String, nullable: false, length: 225 },
//     email: { type: String, nullable: false, length: 225 },
//     password: { type: String, nullable: false },
//     is_active: { type: Boolean, nullable: false, default: true },
//   },
// });
// src/entities/user.entity.ts
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'users' }) // Định nghĩa tên bảng
export class User {
  @PrimaryKey()
  id!: number; // Primary key (auto-increment)

  @Property()
  username!: string; // Tên người dùng

  @Property({ unique: true }) // Email là duy nhất
  email!: string;

  @Property()
  password!: string; // Mật khẩu đã được mã hóa

  @Property({ default: true }) // Mặc định là true khi user được tạo
  is_active: boolean = true;

  @Property({ onCreate: () => new Date() }) // Ngày tạo tự động sinh
  createdAt: Date = new Date();

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}

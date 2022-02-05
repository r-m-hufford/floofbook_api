import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  firstName: string;

  @Column({ type: "varchar", length: 50 })
  lastName: string;

  @Column({ type: "varchar", length: 100 })
  email: string;

  @Column({ type: "varchar", length: 50 })
  breed: string;

  @Column({ type: "varchar", length: 50 })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  modifiedAt: Date;

  @Column({ type: 'timestamp with time zone', nullable: true })
  passwordChangeAt: Date;
}
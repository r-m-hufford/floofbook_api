import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('profiles')
export class User extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ type: "varchar", length: 50 })
  name: string;
  
  @Column({ type: "varchar", length: 100, nullable: true })
  email: string;
  
  @Column({ type: "varchar", length: 50 })
  breed: string;
  
  @Column({ type: "varchar", length: 50 })
  password: string;
  
  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  modified_at: Date;
  
  @Column({ type: 'timestamp with time zone', nullable: true })
  password_changed_at: Date;
  
  static async findByName(name:string): Promise<User> {
    return User.createQueryBuilder('profiles')
    .where('LOWER(user.name) = :name', { name: name.toLowerCase().trim() })
    .getOne();
  }
  
  async authenticate(userName: string, password: string) {
    let user = await User.findByName(userName);
    return user;
  }
}



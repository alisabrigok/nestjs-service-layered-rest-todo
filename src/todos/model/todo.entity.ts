import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("todos")
export class TodoEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 500, nullable: false })
  title: string;

  @Column({ nullable: true })
  description: string | null;

  @Column({ default: false })
  isDone: boolean;

  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BaseEntity {
    @PrimaryGeneratedColumn()
    public id!: number;
    @Column()
    public createdAt: Date | undefined;
    @Column()
    public lastUpdated: Date | undefined;
    @Column()
    public isDeleted: Boolean = false;
}
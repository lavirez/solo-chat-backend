import { Entity, PrimaryGeneratedColum, Column } from "typeform"; 

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    age: number; 
}

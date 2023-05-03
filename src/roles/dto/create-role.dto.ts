import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    readonly value: string
    @ApiProperty({example: '12345678', description: 'Пароль'})
    readonly description: string
}

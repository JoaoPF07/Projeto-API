import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { UsuariosArmazenados } from "../usuario.dm";
export declare class EmailUnicoValidator implements ValidatorConstraintInterface {
    private clsUsuariosAmarzenados;
    constructor(clsUsuariosAmarzenados: UsuariosArmazenados);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const EmailUnico: (opcaoValidacao: ValidationOptions) => (objeto: Object, propriedade: string) => void;

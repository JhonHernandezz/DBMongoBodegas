var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
export class Productos {
    constructor(data) {
        Object.assign(this, data);
        this.id = 0;
        this.nombre = "";
        this.descripcion = "";
        this.estado = 0;
        this.Id_created_by = 0;
        this.Id_update_by = 0;
    }
}
__decorate([
    Expose({ name: "ID" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `ID is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Productos.prototype, "id", void 0);
__decorate([
    Expose({ name: "Name" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `Name is required` };
        }
        if (/[a-z-A-Z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Productos.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "Description" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `Description is required` };
        }
        if (/[a-z-A-Z0-9\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `Error en los parametros 1` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Productos.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: "Status" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `Status is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Productos.prototype, "estado", void 0);
__decorate([
    Expose({ name: "created_By" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `created_By is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Productos.prototype, "Id_created_by", void 0);
__decorate([
    Expose({ name: "update_By" }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `update_By is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Productos.prototype, "Id_update_by", void 0);

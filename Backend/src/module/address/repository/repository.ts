import { prisma } from "../../../config/prisma";
import { AddressrepositoryDto, createAddressDto, updateAddressDto } from "./interface";
import { Address } from "@prisma/client";

class AddressRepository implements AddressrepositoryDto {
    async create(data: createAddressDto): Promise<Address> {
        return await prisma.address.create({ data })
    }


    async get(id: number): Promise<Address | Address[] | null> {
        if (!id) {
            return await prisma.address.findMany()
        }
        return await prisma.address.findFirst({ where: { id } })
    }

    async update({ id,...data}: updateAddressDto): Promise<Boolean > {
        await prisma.address.update({ where: { id  }, data })
        return true

    }
    async delete(id: number): Promise<Boolean> {
        await prisma.address.delete({ where: { id } })

        return true
    }
}

export { AddressRepository }
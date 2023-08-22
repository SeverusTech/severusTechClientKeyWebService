/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { HttpException, HttpStatus, Injectable, Req } from '@nestjs/common';
import supabase from 'src/config/supabasse.config';
import { Client } from 'src/interfaces/Client';

@Injectable()
export class ClientService {
  async getHello(params: Client) {
    const { path } = params;
    // await supabase.auth.signInWithPassword({
    //   email: 'severustechcliente@gmail.com',
    //   password: 'h7@yrld4OTHL1qZ1@s7nyVIFgm6!WJDw0zmWw@T1k2G1vG@H5L',
    // });
    if (!params || !path) {
      throw new HttpException(
        'Acesso não foi autorizado!',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const { data, error } = await supabase
      .from('licenses')
      .select('licenseKey')
      .or(`webPath.eq.${path}`);

    if (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }

    if (data.length === 0) {
      throw new HttpException(
        'Acesso não foi autorizado, nenhum registro foi encontrado!',
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      license: data[0],
      status: HttpStatus.OK,
    };
  }
}

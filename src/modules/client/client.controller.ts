import { Controller, Get, Query } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from 'src/interfaces/Client';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  getHello(@Query() params: Client) {
    return this.clientService.getHello(params);
  }
}

const request = require('supertest');
const app = require('../src/app'); // Importa o app sem o servidor

describe('Gerador de Corridas', () => {
  it('Deve criar uma corrida', async () => {
    const response = await request(app)
      .post('/corridas')
      .send({ usuario: 'usuario1', origem: 'Rua A', destino: 'Rua B' });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Deve cancelar uma corrida existente', async () => {
    const createResponse = await request(app)
      .post('/corridas')
      .send({ usuario: 'usuario1', origem: 'Rua A', destino: 'Rua B' });
    const corridaId = createResponse.body.id;

    const cancelResponse = await request(app)
      .delete(`/corridas/${corridaId}`);

    expect(cancelResponse.statusCode).toBe(200);
    expect(cancelResponse.body).toHaveProperty('status', 'cancelada');
  });
});

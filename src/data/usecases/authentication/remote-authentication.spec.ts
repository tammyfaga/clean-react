import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/mock-http-client'
import faker from 'faker'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}
describe('RemoteAuthentication', () => {
  const url = faker.internet.url()
  const { sut, httpPostClientSpy } = makeSut(url)
  test('Should call HttpPostClient with correct URL', async () => {
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})

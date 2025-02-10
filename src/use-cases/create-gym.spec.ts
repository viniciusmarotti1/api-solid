import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })
  it('should be able to create a gym', async () => {
    const { gym } = await sut.execute({
      title: 'Gym-01',
      description: null,
      phone: null,
      latitude: -22.8803035,
      longitude: -48.4439025,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})

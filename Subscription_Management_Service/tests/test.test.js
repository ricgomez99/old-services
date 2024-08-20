import { sayHi } from '../src/test.js'

describe('First Test!', () => {
  test('Say Hi', () => {
    expect(sayHi('Andres')).toBe('Hi Andres!')
  })
})

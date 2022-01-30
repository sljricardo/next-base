import casual from 'casual'

describe('Fake Data', () => {
  it('should have the same ip', () => {
    const fakeIp = casual.ip

    expect(fakeIp).toEqual(fakeIp)
  })
})

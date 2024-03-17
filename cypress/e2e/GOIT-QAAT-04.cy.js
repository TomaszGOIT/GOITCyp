describe('API testing', () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const randomArgs = getRandomInt(1000)
    const randomId = getRandomInt(20000)
    const bodyData = {
        bodyKey: 'bodyValue'
    }
    const requestPOST = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: bodyData,
        args: randomArgs,
        failOnStatusCode: false,
    }
    const requestGET = {
        method: 'GET',
        url: 'https://httpbin.org/get',
        body: bodyData,
        qs: {
            'key': 'value'
        },
        failOnStatusCode: false,
    }
    const requestHEADERS = {
        method: 'GET',
        url: 'https://httpbin.org/get',
        body: bodyData,
        headers: {
            'user-agent': "My test user-agent",
            'customHeader': "customValue",
            'referer': "customReferer", 
            'date': "My date"

            
        },
        failOnStatusCode: false
    }
    const requestURL = {
        method: 'GET',
        url: 'https://httpbin.org/image/jpeg',
        body: bodyData,
        headers: {
            'server': 'My Serwer' 
        }

    }
    const requestDELETE = {
        method: 'DELETE',
        url: 'https://httpbin.org/delete',
        body: bodyData,
        id: randomId,
        failOnStatusCode: false,
    }


    it('1 test API', () => {
        cy.api(requestPOST).then(response => {
            const status = response.status
            assert.equal(200, status)
            assert.notStrictEqual(bodyData, response.body.data)
            cy.log(response.body.data)
            expect(response.duration).to.not.be.greaterThan(1000)
      })
    })

    it('2 test API', () => {
        cy.api(requestGET).then(response => {
            const status = response.status
            assert.equal(200, status)
            assert.equal('value', response.body.args.key)
            cy.log(response.body.args)
            expect(response.duration).to.not.be.greaterThan(1000)
            
      
      })
    })

    it('3 test API', () => {
        cy.api(requestHEADERS).then(response => {
            const status = response.status
            assert.equal(200, status)
            assert.equal("My test user-agent", response.requestHeaders["user-agent"])
            cy.log(response.requestHeaders)
            expect(response.duration).to.not.be.greaterThan(1000)
      })
      
    })


    it('4 test API', () => { 
        cy.api(requestHEADERS).then(response => {
            assert.equal("customValue", response.requestHeaders.customHeader)
            const status = response.status
            assert.equal(200, status)       
            expect(response.duration).to.not.be.greaterThan(1000)
        })
    })

    it('5 test API', () => { 
        cy.api(requestHEADERS).then(response => {
            assert.equal("customReferer", response.requestHeaders.referer)
            const status = response.status
            assert.equal(200, status)       
            expect(response.duration).to.not.be.greaterThan(1000)
        })
    })

    it('6 test API', () => { 
        cy.api(requestURL).then(response => {
            assert.equal("My Serwer", response.requestHeaders.server)
            const status = response.status
            assert.equal(200, status)       
            expect(response.duration).to.not.be.greaterThan(1000)
        })
    })

    it('7 test API', () => { 
        cy.api(requestPOST).then(response => {
            const status = response.status
            assert.equal(200, status)       
            expect(response.duration).to.not.be.greaterThan(1000)
        })
    })

    it('8 test API', () => { 
        cy.api(requestDELETE).then(response => {

            const status = response.status
            assert.equal(200, status)
            expect(response.duration).to.not.be.greaterThan(1000)
        })
    })

    it('9 test API', () => { 
        cy.api(requestPOST).then(response => {
            assert.notStrictEqual(bodyData, response.body.headers.Host)
            const status = response.status
            assert.equal(200, status)       
            expect(response.duration).to.not.be.greaterThan(1000)
        })
    })

    it('10 test API', () => { 
        cy.api(requestHEADERS).then(response => {
             assert.equal("My date", response.requestHeaders.date)
            const status = response.status
            assert.equal(200, status)       
            expect(response.duration).to.not.be.greaterThan(1000)
        })
    })
})
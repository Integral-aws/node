const assert = require('assert');
const { expect } = require('chai');
const { obtenerFrutas, obtenerFrutasyLegumbres } = require('../server/bo');

it('Prueba 1', async() => {
    try{
        const frutas = await obtenerFrutas();
        console.log("Mis frutas: ", frutas);
    }catch(e){ console.log(e);
        expect(e).to.be.undefined();
    }
});
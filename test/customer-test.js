import chai from 'chai';
const expect = chai.expect;


import Customer from '../classes/Customer';


import { customerData } from '..sample-data/customerData';

describe('Customer', () => {
  let customer1
  let customer2

});

  beforeEach(() => {
    customer1 = new Customer(customerData[0]);
    customer2 = new Customer(customerData[1]);
  });

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('Should insantiate a new instance of a customer', () => {
    expect(customer1).to.be.an.instanceOf(Customer);
  });

  it('Should have an id', () => {
    expect(customer1.id).to.equal(1);
  });

  it('Should have a name', () => {
    expect(customer1.name).to.equal('Leatha Ullrich');
  });

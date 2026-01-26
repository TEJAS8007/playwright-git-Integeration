import {test,expect} from '../../fixtures/hooks.fixture';
import apiPathData from '../../data-files/api-data/employee-module-path.json';
import restApiData from '../../data-files/api-data/employee-module-data.json';


let booking_ID : any;

test.describe('CRUD Employee Operations', () => {
  test.describe.configure({ mode: 'serial'});

  test('creating new Employee Record',{
    tag : ['@API'],
    annotation : {
        type : 'Test Case',
        description : 'Verify that user can create new employee record using POST call'
    }
},async({request})=> {

    const createBookingResponse : any = await request.post(apiPathData.employee_endpoint,{
        data : restApiData.create_booking
    });

    const createBookingJsonResponse : any = await createBookingResponse.json();

    expect(createBookingResponse.status()).toBe(200);
    expect(createBookingResponse.statusText()).toBe('OK');

    expect(createBookingJsonResponse).not.toBeNull();
    expect(createBookingJsonResponse).toMatchObject(restApiData.create_booking);

    booking_ID = await createBookingJsonResponse.id;
    
});

test('Getting employee objects',{
    tag : ['@API'],
    annotation : {
        type : 'Test Case',
        description : 'Verify that user can get Booking thruogh GET API Call.'
    }
},async({request})=> {

    const getApiResponse : any = await request.get(`${apiPathData.employee_endpoint}/${booking_ID}`);
    
    const getApiJsonResponse : any = await getApiResponse.json();

    expect(getApiResponse.status()).toBe(200);
    expect(getApiResponse.statusText()).toBe('OK');

    expect(getApiJsonResponse).not.toBeNull();
    expect(getApiJsonResponse).toMatchObject(restApiData.create_booking);

});

test('Updating employee objects',{
    tag : ['@API'],
    annotation : {
        type : 'Test Case',
        description : 'Verify user can update employee Objects using PUT API call.'
    }
},async({request})=> {

    const putApiRequest = await request.put(`${apiPathData.employee_endpoint}/${booking_ID}`,{
        data : restApiData.update_booking
    });

    const putApiJsonResponse = await putApiRequest.json();

    expect(putApiRequest.status()).toBe(200);
    expect(putApiRequest.statusText()).toBe('OK');

    expect(putApiJsonResponse).not.toBeNull();
    expect(putApiJsonResponse).toMatchObject(restApiData.update_booking);
});

test('Partial updating employee Objects',{
    tag : ['@API'],
    annotation : {
        type : 'Test Case',
        description : 'Verify that user can pertially update emplyee object through PATCH API call'
    }
},async({request})=> {

    const patchApiResponse = await request.patch(`${apiPathData.employee_endpoint}/${booking_ID}`,{
        data : restApiData.partial_update
    });

    const patchApiJsonResponse = await patchApiResponse.json();

    expect(patchApiResponse.status()).toBe(200);
    expect(patchApiResponse.statusText()).toBe('OK');

    expect(patchApiJsonResponse).not.toBeNull();
});

test('Deleting employee Objects',{
    tag : ['@API'],
    annotation : {
        type : 'Test Case',
        description : 'Verify that user can delete employee objects through DELETE API Call'
    }
},async({request})=> {

    const deleteApiResponse = await request.delete(`${apiPathData.employee_endpoint}/${booking_ID}`);

    const deleteApiJsonResponse = await deleteApiResponse.json();

    expect(deleteApiResponse.status()).toBe(200);
    expect(deleteApiResponse.statusText()).toBe('OK');

    expect(deleteApiJsonResponse.message).toBe(`Object with id = ${booking_ID} has been deleted.`)
});

});

test('Get multiple objects',{
    tag : ['@API'],
    annotation : {
        type : 'Test Case',
        description : 'Verify user can get multiple objects through GET API call.'
    }
},async({request})=> {

    const getApiResponse = await request.get(apiPathData.employee_endpoint);

    const getApiJsonResponse = await getApiResponse.json();

    expect(getApiResponse.status()).toBe(200);
    expect(getApiResponse.statusText()).toBe('OK');

   expect(getApiJsonResponse).not.toBeNull();

});

test('Get multiple objects by ID',{
    tag : ['@API'],
    annotation : {
        type : 'Test Case',
        description : 'Verify user can get multiple objects using ID through GET API call.'
    }
},async({request})=> {

    const params = new URLSearchParams();
    ['3','5','10'].forEach(v => params.append('id', v));

    const getApiResponse = await request.get(`${apiPathData.employee_endpoint}?${params}`);

    const getApiJsonResponse = await getApiResponse.json();

    expect(getApiResponse.status()).toBe(200);
    expect(getApiResponse.statusText()).toBe('OK');

   expect(getApiJsonResponse).not.toBeNull();
   
});






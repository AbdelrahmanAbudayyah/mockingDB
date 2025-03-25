const getUserInfo= require('./player');
const {getUser}= require('./database');
const {pool}= require('./database');

//const pool = require('./database');

//jest.mock("./database");

test("getUserInfo returns user data from the real database",async()=>{
   // const mockUser = { id: 1, name: "John Doe", email: "john@example.com" };
   // getUser.mockResolvedValue(mockUser);
   const userInfo=await getUserInfo(1);
    
   expect(userInfo).toEqual('abood'); 
  //expect(getUser).toHaveBeenCalledTimes(1); 
  //expect(getUser).toHaveBeenCalledWith(1); 
})

// Cleanup after all tests are run
afterAll(async () => {
    await pool.end(); // Close the database connection pool
  });
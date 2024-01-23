//Authentication Middleware (authenticate function):

Verifies the presence of a JWT in the request header.
If the token is missing, it sends a 'No token' response.
If the token is invalid, it returns an error.
If the token is valid, it decodes the token and attaches the user information to the request object.
///////////////////////////////////////////////////////////////////

//Authorization Middleware (authorize function):

Checks if the authenticated user has the required roles to access a route.
Takes an array of roles as an argument and compares them with the roles attached to the user.
If the user has the required role, it allows the request . if not, it sends an 'Unauthorized' response.
/////////////////////////////////////////////////////////////////////////////

//////////////////////user functions///////////////////////////////

//registerUser:

Creates a new user with the username, email, and password.
Returns the created user.


//loginUser:

Finds a user with the required username.
If the user is not found, logs 'User not found'.
Compares the provided password with the user's stored password.
If the password is invalid, logs 'Invalid password'.
Returns an object with the username of the authenticated user.


//getAllUsers:

Retrieves all users from the database, returning only their firstName.
Returns an array of users.


//deleteUser:

Deletes a user with the specified email.
Returns 'User deleted' in successful deletion.


//editUser:

Finds a user with the specified email and updates it with the provided editValue.
Returns an object containing the updated user.


//followUser:

Adds the userId to the array of the currentUser.
Logs 'already following' if the user is already following the specified user.
Returns 'followed successfully' in successful following.


//unfollowUser:

Removes the userId from the array of the currentUser.
Logs 'not following' if the user is not currently following the specified user.
Returns 'unfollowed successfully' in successful unfollowing.


//searchUsers:

Searches for users whose username matches the provided query using regex.
Returns an array of matching users.
 
///////////////////////////////////////////////////////////////////////

////////////////////////////blog functions////////////////////////////

//createBlog:

Creates a new blog with the title, body, photo, tags, and author.
Returns the created blog.


//updateBlog:

Finds a blog by the specified id and updates it with the provided title, body, photo, and tags.
Returns the updated blog.


//deleteBlog:

Deletes a blog with the specified id.
Returns 'deleted successfully' upon successful deletion.


//getBlogById:

Retrieves a specific blog by its id .
Returns the blog.


//getLatestBlogs:

Retrieves the latest blogs by sorting them based on the 'createdAt' field in descending order.
Returns an array of latest blogs.


//searchBlogs:

Searches for blogs based on the provided query in the author's username, title, or tags.
Returns an array of matching blogs.
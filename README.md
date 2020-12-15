# Cloudy Mind

http://cloudymind.herokuapp.com/

Cloudy Mind is a web application focused on highlighting mental health issues. 
This app provides a safe and calm enviornment for users to express their 
thoughts and feelings. Users can also comment on other user's thoughts and 
feelings in hopes to show them that they are not alone. 

## Technologies Used

* Mongoose / Mongo DB
* React & Redux
* Node js
* Express js

## Languages 
* HTML / CSS
* Javascript

## Key Features

* Users will be able to post their thoughts which will then be displayed to
users in a post index page. Clicking on a post will then open up a modal will 
enable users to create comments towards that post.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Alt Text](https://media.giphy.com/media/XjhZOa7i8UUrMxxQgn/giphy.gif)

* Users will be able to go to navigate to their inbox, specifically to their written posts,
and reply to users who have commented on their posts.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![Alt Text](https://media.giphy.com/media/ydCz1iKG0EVlrBU4tx/giphy.gif)

## Code Snippet

* In 5 days our team was able to create a fully functioning web application using 
technologies that we have learned over the weekend. Because of the time constraint 
placed on this project, our team was able to create a function to retrieve specific 
attributes from the database without restructuring the schema. The code snippet below
displays a function in order to filter out multiple posts with the same body.

    ```
        this.props.fetchUserPosts(this.props.currentUser.id)
        this.props.fetchUserComments(this.props.currentUser.id).then(comments => {
        comments.comments.data.forEach(comment => {
          this.props.fetchPost(comment.post).then(post => {
            this.props.fetchUser(post.post.data.user).then((user) => {
              let oldArr = this.state.commentedOnPostsBody;
              let obj = {body: post.post.data.body, username: user.user.data.username, 
              postId: post.post.data._id}
              let count = 0
            if (oldArr.length < 1) {
              oldArr.push(obj)
            }
            else {
              oldArr.forEach((oldObj) => {
                if (oldObj.body === obj.body ) {
                  count += 1
                }
                
              })
              if (count === 0) {
                oldArr.push(obj)
              }
            }
            this.setState({
              commentedOnPostsBody: oldArr,
              // username: user.user.data.username
            })
          // }
            })       
          })
        })
        })
      
  ```
## Thanks for visiting and be sure to check out our individual repositories for more creations!

### Jhiles Young   
[Link to Jhiles' Github!](https://github.com/jhilesyoung)

### Michelle Lin
[Link to Michelle's Github!](https://github.com/michelleamazinglin)

### Tahmina Nizam
[Link to Tahmina's Github!](https://github.com/tnizam)

### Christopher Lee
[Link to Christopher's Github!](https://github.com/Gogetaspirit)

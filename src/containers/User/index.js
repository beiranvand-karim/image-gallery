import React, {Component} from "react"
import config from "../../config"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import UserPreview from "../../components/UserPreview"

export class User extends Component {

   constructor(props) {
      super(props);
      this.fetchUsers = this.fetchUsers.bind(this)
   }

   componentDidMount() {
      this.fetchUsers()
   }

   state = {
      data: null,
      loading: false,
      error: null,
   };

   fetchUsers() {
      this.setState({loading: true});
      fetch(`${config.server}/users`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json"
         }
      })
         .then(response => {
            if (response.status === 200) {
               this.setState({loading: false});
               response.text().then((data) => this.setState({data: JSON.parse(data)}));
            } else {
               this.setState({loading: false});
               this.setState({error: response.error})
            }
         })
         .catch(error => {
            this.setState({loading: false});
            this.setState({error})
         })
   }

   render() {
      const {data, error, loading} = this.state;
      if (error) {
         return <Error error={error}/>
      }

      if (loading) {
         return <Loading/>
      }

      if(data) {
         return <UserPreview users={data}/>
      }
      return null
   }
}

export default User
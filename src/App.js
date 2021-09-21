import React from 'react'
import Routes from './config/routes'
import Header from './components/Header'
import NavBar from './components/NavBar'

class App extends React.Component{
	state = {}

    componentDidMount(){
        this.setState({
            size: '7 Foot',
            type: 'Leather',
            stairs: 0,
            startingZipcode: '',
            endingZipcode:'',
            loading: false,
            redirect: false,
            total: 0,
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        
        console.log(this.state)
    }




    calculateQuote = () => {
        // zipcodeapi key = bAgi1RI9lHLN8dqiRbibsTageXfUYBLJphP2ivQN0uepytgv7tPCoAmtAfHk9lxi
        // js-UMZvad4M1hSNLLyhAnj5CVwfWYqV2LITnLeH8lITOAP7ZOhTD4FYli5ZmNZ4EJ3P

        this.setState({
            loading: true,
            redirect:true,
        })


        let sum = 0
        let mileage = 0

        const calculateInfo = () => {

            switch(this.state.size){
                        case '7 Foot':
                            sum = sum + 350
                            break
                        case '8 Foot':
                            sum = sum + 400
                            break
                        case '9 Foot':
                            sum = sum + 450
                            break
                        default:
                            return
                    }

                    if(this.state.type === 'Leather'){
                        sum = sum + 40
                    }else if (this.state.type === 'Plastic'){
                        sum = sum + 60
                    }

                    let milageFee = mileage * 2.25
                    sum = sum + milageFee

                    if(this.state.size === '9 Feet'){
                        let stairsFee = this.state.stairs * 7.50
                        sum = sum + stairsFee
                    }else{
                        let stairsFee = this.state.stairs * 6.25
                        sum = sum + stairsFee
                    }
                    const quote = Math.round(sum)
                    
                    this.setState({
                        total: quote,
                    })

                    localStorage.setItem('jobInfo', JSON.stringify(this.state))
                    localStorage.setItem('jobQuote', JSON.stringify(quote))
                }
        
        const calculateDistance = () => {

            fetch(`https://www.zipcodeapi.com/rest/js-UMZvad4M1hSNLLyhAnj5CVwfWYqV2LITnLeH8lITOAP7ZOhTD4FYli5ZmNZ4EJ3P/distance.json/${this.state.startingZipcode}/${this.state.endingZipcode}/mile`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const distance = data.distance
                mileage = distance
            })
            .then(() => {
                calculateInfo()
            })
            .catch((err) => {
                console.log(err)
            })

        }
        
        const endLoading = () => {
            this.setState({
                loading: false
            })
        }
        calculateDistance()
        
        const loaded = setTimeout(() => {
            if(this.state.total !== 0 || NaN){
                endLoading()
            }else{
                loaded()
            }
        }, 4400)
        
    }


	render() {
        return(
            <>
            <Header/>
            <NavBar />
            <Routes handleChange={this.handleChange}  state={this.state} calculateQuote={this.calculateQuote} calculateDistance={this.calculateDistance}/>
            </>
        )
	}

}

export default App;

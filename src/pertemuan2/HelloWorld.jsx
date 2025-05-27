export default function HelloWorld(){
    const propsUserCard = {
        nama:"Vaqieh",   
        nim:"2355301204",
        tanggal:"2025/03/03"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingRumbai/>
            <QuoteText />
            
            <UserCard {...propsUserCard}/>

            <img src="img/mobil.png" alt="logo" />
        </div>
    )
}

function GreetingRumbai(){
    return(
        <small>Salam Dari Rumbai</small>
    )
}

function QuoteText(){
    const text = "Mulutmu Harimaumu";
    const text2 = "AKu ingin menjadi macan";

    return(
        <div>
            <hr />
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}

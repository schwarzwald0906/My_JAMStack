import { client } from "lib/api";
export default function Schedule() {
    return (
        <div>
            Enter
        </div>
    );
}

export async function getStaticProps(){
    const resPropmise = client.get({
        endpoint:'blogs'
    })
    // resPropmise.then((res)=>console.log(res)).catch((err)=>console.log(err))
    // console.log(resPropmise)
    try {
        const res = await resPropmise;
    } catch (err) {
        console.log(err)
    }

    return{
        props:{}
    }
}
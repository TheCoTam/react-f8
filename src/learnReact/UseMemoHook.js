import { useMemo, useState, useRef } from 'react'

export default function UseMemoHook() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [product, setProduct] = useState([])

    const nameRef = useRef()

    const handleAddProduct = () => {
        setProduct([...product, {
            name,
            price: parseInt(price)
        }])

        setName('')
        setPrice('')
        nameRef.current.focus()
    }

    const total = useMemo(() => {
        const res = product.reduce((res, prod) => {
            console.log('re-cal');

            return res + prod.price
        }, 0)
        return res
    }, [product])

    return(
        <>
        <input
            ref={nameRef}
            value={name}
            placeholder="Enter name..."
            onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
            value={price}
            placeholder="Enter price..."
            onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button onClick={handleAddProduct}>Add</button>
        <br />
        Total: {total}
        <br />
        <ul>
            {product.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
        </ul>
        </>

    )
}
import { useState } from "react"

const TestComponent = () => {

    const [state, setState] = useState("default")

    const data = [
        { "name": "jim jimmerson", "age": "21" },
        { "name": "mage magerson", "age": "54" }
    ]



    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr></tr>
                    </thead>
                    <tbody>
                        {data.map(data => {
                            return (
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.age}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
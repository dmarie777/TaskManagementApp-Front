function LabeledInput({text, type}) {
    return (
        <>
        <label htmlFor="">{text}
        <input type={type} required />
        </label>
        </>
    )
}
export {LabeledInput}
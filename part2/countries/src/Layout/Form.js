function Form({ onFormChange, formValue }) {
    return (
        <form action="">
            <label htmlFor='search' >
                find countries:{' '}
            </label>
            <input name='search' onChange={onFormChange} value={formValue} />
        </form>
    )
}

export default Form
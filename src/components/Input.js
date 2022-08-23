export default function Input({ type = 'radio', name, value, onChange, label }) {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type={type}
                name={name}
                value={value}
                id={value}
                onChange={onChange}
            />
            <label htmlFor={value} className=" form-check-label">{label}</label>
        </div>
    )
}
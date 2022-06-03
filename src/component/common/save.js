export default function save(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}
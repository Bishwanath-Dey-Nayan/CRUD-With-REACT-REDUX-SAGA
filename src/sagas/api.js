export const fetchEmployees = () => (
    fetch('http://localhost:56293/api/Employee', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(names => names, error => "json failed" )
  )
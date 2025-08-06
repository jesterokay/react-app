import React, { useState, useEffect } from 'react';
import api from '../../services/api';

function AddStaff({ refreshStaff }) {
  const [id, setId] = useState(null);
  const [departmentId, setDepartmentId] = useState('');
  const [positionId, setPositionId] = useState('');
  const [spatieRole, setSpatieRole] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [hireDate, setHireDate] = useState('');
  const [salary, setSalary] = useState('');
  const [status, setStatus] = useState('active');
  const [image, setImage] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [positions, setPositions] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log('Fetching form data...');
        
        // Try using the form-data endpoint first
        try {
          const response = await api.get('/users/form-data');
          console.log('Form data response:', response.data);
          
          if (response.data) {
            setDepartments(response.data.departments || []);
            setPositions(response.data.positions || []);
            setRoles(response.data.roles || []);
            setError(null);
            setLoading(false);
            return;
          }
        } catch (formError) {
          console.log('Form data endpoint failed, trying individual endpoints:', formError);
        }
        
        // If form-data endpoint fails, try individual endpoints
        console.log('Trying individual endpoints...');
        
        try {
          const deptResponse = await api.get('/departments');
          console.log('Departments response:', deptResponse.data);
          setDepartments(deptResponse.data || []);
        } catch (err) {
          console.error('Departments error:', err);
        }
        
        try {
          const posResponse = await api.get('/positions');
          console.log('Positions response:', posResponse.data);
          setPositions(posResponse.data || []);
        } catch (err) {
          console.error('Positions error:', err);
        }
        
        try {
          const roleResponse = await api.get('/roles');
          console.log('Roles response:', roleResponse.data);
          setRoles(roleResponse.data || []);
        } catch (err) {
          console.error('Roles error:', err);
        }
        
        setError(null);
      } catch (error) {
        console.error('Error fetching dropdowns:', error);
        setError(`Failed to load form data: ${error.message || 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    
    const editData = JSON.parse(localStorage.getItem('editUser'));
    if (editData) {
      console.log('Loading edit data:', editData);
      setId(editData.id || null);
      setDepartmentId(editData.department_id || '');
      setPositionId(editData.position_id || '');
      // Check if role exists in the edit data
      if (editData.roles && editData.roles.length > 0) {
        setSpatieRole(editData.roles[0].name);
      }
      setPhone(editData.phone || '');
      setUsername(editData.username || '');
      setPassword('');
      setPasswordConfirmation('');
      setFirstName(editData.first_name || '');
      setLastName(editData.last_name || '');
      setEmail(editData.email || '');
      setHireDate(editData.hire_date || '');
      setSalary(editData.salary || '');
      setStatus(editData.status || 'active');
      setImage(null);
      localStorage.removeItem('editUser');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate password confirmation
    if (password && password !== passwordConfirmation) {
      alert('Passwords do not match');
      return;
    }
    
    try {
      const formData = new FormData();
      formData.append('department_id', departmentId);
      formData.append('position_id', positionId);
      formData.append('spatie_role', spatieRole);
      formData.append('phone', phone || '');
      formData.append('username', username);
      if (password) {
        formData.append('password', password);
        formData.append('password_confirmation', passwordConfirmation);
      }
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      formData.append('email', email);
      formData.append('hire_date', hireDate);
      formData.append('salary', salary);
      formData.append('status', status);
      if (image) formData.append('image', image);

      console.log('Submitting form...');
      
      if (id) {
        await api.post(`/users/${id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('User updated successfully');
      } else {
        await api.post('/users', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        alert('User added successfully');
      }
      
      // Reset form
      setId(null);
      setDepartmentId('');
      setPositionId('');
      setSpatieRole('');
      setPhone('');
      setUsername('');
      setPassword('');
      setPasswordConfirmation('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setHireDate('');
      setSalary('');
      setStatus('active');
      setImage(null);
      
      if (refreshStaff) refreshStaff();
    } catch (error) {
      console.error('Submit error:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Failed to submit';
      alert(errorMessage);
    }
  };

  if (loading) {
    return <div>Loading form data...</div>;
  }

  if (error) {
    return (
      <div>
        <div style={{ color: 'red', marginBottom: '20px' }}>Error: {error}</div>
        <button 
          onClick={() => window.location.reload()} 
          style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{id ? 'Edit User' : 'Add User'}</h2>
      <div style={styles.form}>
        <div style={styles.grid}>
          <label style={styles.label}>
            Department:
            <select
              value={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
              required
              style={styles.input}
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </label>
          
          <label style={styles.label}>
            Position:
            <select
              value={positionId}
              onChange={(e) => setPositionId(e.target.value)}
              required
              style={styles.input}
            >
              <option value="">Select Position</option>
              {positions.map((pos) => (
                <option key={pos.id} value={pos.id}>
                  {pos.name}
                </option>
              ))}
            </select>
          </label>
          
          <label style={styles.label}>
            Role:
            <select
              value={spatieRole}
              onChange={(e) => setSpatieRole(e.target.value)}
              required
              style={styles.input}
            >
              <option value="">Select Role</option>
              {roles.map((role) => (
                <option key={role.id} value={role.name}>
                  {role.name}
                </option>
              ))}
            </select>
          </label>
          
          <label style={styles.label}>
            Phone:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={styles.input}
            />
          </label>
          
          <label style={styles.label}>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          
          <label style={styles.label}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={id ? 'Leave blank if unchanged' : ''}
              required={!id}
              style={styles.input}
            />
          </label>
          
          <label style={styles.label}>
            Confirm Password:
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder={id ? 'Leave blank if unchanged' : ''}
              required={!id}
              style={styles.input}
            />
          </label>
          
          <label style={styles.label}>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          
          <label style={styles.label}>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          
          <label style={styles.label}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          
          <label style={styles.label}>
            Hire Date:
            <input
              type="date"
              value={hireDate}
              onChange={(e) => setHireDate(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          
          <label style={styles.label}>
            Salary:
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
              style={styles.input}
            />
          </label>
          
          <label style={styles.label}>
            Status:
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              style={styles.input}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="terminated">Terminated</option>
            </select>
          </label>
          
          <label style={styles.label}>
            Image:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              style={styles.input}
            />
          </label>
        </div>
        <button onClick={handleSubmit} style={styles.button}>
          {id ? 'Update User' : 'Add User'}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
  },
  label: {
    margin: '10px 0 5px',
    color: '#555',
  },
  input: {
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default AddStaff;
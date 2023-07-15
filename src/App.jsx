import Container from "./components/body/Container";
import Card from "./components/card/Card";
import Button from "./components/Button";
import Navbar from "./components/header/Navbar";
import { useState } from "react";
import { uid } from "uid";

function App() {

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Doe',
      phone: '669860237039',
    },
  ]);

  const [isUpdate, setIsUpdate] = useState({
    id: null,
    status: false,
  })

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  function handleChange(e) {
    let datas = { ...formData };
    datas[e.target.name] = e.target.value;
    datas[e.target.phone] = e.target.value;
    setFormData(datas);
  }

  function resetInput() {
    console.log('reset input');
  }

  function saveContact(e) {
    e.preventDefault();

    if (formData.name == '') return alert('Name cannot be empty!');
    if (formData.phone == '') return alert('Phone cannot be empty!');

    alert('Simpan kontak ' + formData.name);

    let datas = [...contacts];

    if (isUpdate.status) {
      datas.forEach((contact) => {
        if (contact.id === isUpdate.id) {
          contact.name = formData.name;
          contact.phone = formData.phone;
        }
      })
    } else {
      datas.push({
        id: uid(),
        name: formData.name,
        phone: formData.phone,
      });
    }

    setIsUpdate({ id: null, status: false });
    setContacts(datas);
    setFormData({
      name: "",
      phone: "",
    })
  }

  function handleEdit(id) {
    let datas = [...contacts];
    let foundData = datas.find((contact) => contact.id === id);

    setFormData({
      name: foundData.name,
      phone: foundData.phone,
    })

    setIsUpdate({ id: id, status: true });
  }

  function handleDelete(id) {
    if (confirm("Press a button!") == true) {
      let datas = [...contacts];
      let filteredData = datas.filter((contact => contact.id !== id));

      setContacts(filteredData);
    }
  }

  return (
    <>
      <Navbar />
      <Container className={'flex justify-center mt-10'}>
        <Card className={'lg:w-1/2 relative font-semibold pt-8'}>
          <div className="absolute rounded-lg -top-4 bg-orange-500 py-1 px-3 left-1/2 -translate-x-1/2 text-white font-semibold">
            Contact
          </div>
          <form>
            <div className="flex mb-2">
              <label htmlFor="name" className="w-14">Name</label>
              <input type="text" name="name" className="border rounded p-1" value={formData.name} onChange={handleChange} />
            </div>
            <div className="flex mb-2">
              <label className="w-14">Phone</label>
              <input type="text" name="phone" className="border rounded p-1" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="grid grid-cols-6 gap-1 mt-4">
              <Button type="submit" onClick={saveContact}>Save</Button>
              <Button type="reset" onClick={resetInput}>Reset</Button>
            </div>
          </form>
        </Card>
      </Container >
      <Container className={'flex justify-center'}>
        <Card className={'w-full lg:w-1/2 font-semibold'} datas={contacts} handleEdit={handleEdit} handleDelete={handleDelete} />
      </Container>
      <Container className={'flex justify-center'}>
        <Card className={'lg:w-1/2 font-semibold'} />
      </Container>
    </>
  )
}

export default App

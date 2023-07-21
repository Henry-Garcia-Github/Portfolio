import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { updateProject } from "../services/api.projects";

function AdminUpdate() {
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const onSubmit = async (data) => {
    try {
      await updateProject(id, data);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pl-4 flex flex-col gap-3 items-center mt-10">
          <div className="bg-black">
            <p> Utiliser uniquement des liens pour les photos et logo </p>
          </div>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                onChange={onChange}
                placeholder="Nom du projet..."
                variant="outlined"
                className="mb-4"
                multiline
                InputLabelProps={{ shrink: true }}
                rows={1}
                inputProps={{ maxLength: 255 }}
                sx={{ width: 300, background: "white" }}
              />
            )}
          />
          <Controller
            name="logo"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                onChange={onChange}
                placeholder="Logo"
                variant="outlined"
                className="mb-4"
                multiline
                InputLabelProps={{ shrink: true }}
                rows={1}
                inputProps={{ maxLength: 255 }}
                sx={{ width: 300, background: "white" }}
              />
            )}
          />
          <Controller
            name="main_photo"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                onChange={onChange}
                placeholder="1ere Photo"
                variant="outlined"
                className="mb-4"
                multiline
                InputLabelProps={{ shrink: true }}
                rows={1}
                inputProps={{ maxLength: 255 }}
                sx={{ width: 300, background: "white" }}
              />
            )}
          />
          <Controller
            name="secondary_photo"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                onChange={onChange}
                placeholder="2eme Photo"
                variant="outlined"
                className="mb-4"
                multiline
                InputLabelProps={{ shrink: true }}
                rows={1}
                inputProps={{ maxLength: 255 }}
                sx={{ width: 300, background: "white" }}
              />
            )}
          />
          <Controller
            name="third_photo"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                onChange={onChange}
                placeholder="3eme Photo"
                variant="outlined"
                className="mb-4"
                multiline
                InputLabelProps={{ shrink: true }}
                rows={1}
                inputProps={{ maxLength: 255 }}
                sx={{ width: 300, background: "white" }}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                onChange={onChange}
                placeholder="description"
                variant="outlined"
                className="mb-4"
                multiline
                InputLabelProps={{ shrink: true }}
                rows={8}
                inputProps={{ maxLength: 255 }}
                sx={{ width: 300, background: "white" }}
              />
            )}
          />
          <Button
            className="rounded-3xl"
            disableElevation
            variant="contained"
            sx={{ width: "125px", color: "black" }}
            onClick={handleSubmit(onSubmit)}
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AdminUpdate;

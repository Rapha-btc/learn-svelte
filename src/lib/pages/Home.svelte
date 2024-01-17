<script>
	import Button from '../Button.svelte';
	import { Field, Form } from '../Form';
	import { validateEmail, validateRequiredField } from '../../lib/utils/validation';
</script>

<Form
	on:submit={(e) => {
		console.log(e.detail);
	}}
	initialValues={{ username: 'TestChange', email: 'test@test.com' }}
	let:hasErrors
	let:values
	let:errors
>
	{JSON.stringify({ hasErrors, values, errors }, null, 2)}
	<Field label="Username" name="username" type="text" validate={validateRequiredField}>
		<p style:color="green" slot="error" let:error>{error}</p>
	</Field>
	<Field
		label="Email"
		name="email"
		type="email"
		validate={(value, label) => {
			return validateEmail(value, label) || validateRequiredField(value, label);
		}}
	/>
	<Field label="Password" name="password" type="password" validate={validateRequiredField} />
	<Button type="submit" disabled={hasErrors}>Submit</Button>
</Form>

<Form
	on:submit={(e) => {
		console.log(e.detail);
	}}
	let:hasErrors
>
	<Field label="Username" name="username2" type="text" validate={validateRequiredField}>
		<p style:color="green" slot="error" let:error>{error}</p>
	</Field>

	<Field label="Password" name="password2" type="password" validate={validateRequiredField} />
	<Button type="submit" disabled={hasErrors}>Submit</Button>
</Form>

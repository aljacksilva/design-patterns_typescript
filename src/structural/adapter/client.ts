import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import { EmailValidatorFnProtocol } from './validation/email-validator-protocol';

function validEmailClass(
  emailValidator: EmailValidatorClassAdapter,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Valid (class)');
  } else {
    console.log('Invalid (class)');
  }
}

function validEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Valid (FUNCTION)');
  } else {
    console.log('Invalid (FUNCTION)');
  }
}

const email = 'jackson@email.com';

validEmailClass(new EmailValidatorClassAdapter(), email);
validEmailFn(emailValidatorFnAdapter, email);

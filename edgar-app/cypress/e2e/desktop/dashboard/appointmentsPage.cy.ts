import createDoctorAccount from 'utils/doctor/createDoctorAccount';
import createPatientAccount from 'utils/createPatientAccount';
import setupMedicalInfo from 'utils/setupMedicalInfo';
import openSlot from 'utils/doctor/openSlot';
import bookAnAppointment from 'utils/bookAnAppointment';

describe('Appointments Page tests - Desktop', () => {
	let authToken: string;

	describe('Init test', async () => {
		it('Create an account', async () => {
			const response = await createPatientAccount();
			authToken = response.authToken;
		});

		it('Create the medical info', async () => {
			await setupMedicalInfo(authToken);
		});

		it('Init the doctor account', async () => {
			const { authToken: authDoctorToken } = await createDoctorAccount();
			const slotId = await openSlot(authDoctorToken);
			await bookAnAppointment(authToken, slotId);
		});
	});

	describe('Good UI', { testIsolation: false }, () => {
		before(() => {
			cy.clearAllLocalStorage();
			cy.clearAllCookies();
			cy.clearAllSessionStorage();
			cy.window().then((win) => win.localStorage.setItem('token', authToken));
			cy.visit('/dashboard/appointments').wait(1000);
		});

		describe('Good number of elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good number of buttons', () => {
				cy.get('button[id^=edgar-dashboardAppointmentsPage]').should('have.length', 5);
			});

			it('Good number of texts', () => {
				cy.get('p[id^=edgar-dashboardAppointmentsPage]').should('have.length', 6);
			});

			it('Good number of labels', () => {
				cy.get('label[id^=edgar-dashboardAppointmentsPage]').should('have.length', 0);
			});

			it('Good number of images', () => {
				cy.get('img').should('have.length', 2);
			});

			it('Good number of inputs', () => {
				cy.get('input[id^=edgar-dashboardAppointmentsPage]').should('have.length', 0);
			});
		});

		describe('Good content for buttons', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for buttons', () => {
				cy.get('#edgar-dashboardAppointmentsPage-appointments-button').should(
					'contain.text',
					'Prendre un rendez-vous',
				);
			});
		});

		describe('Good content for texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Good content for Next Appointments', () => {
				cy.get('#edgar-dashboardAppointmentsPage-nextAppointments-text').should(
					'contain.text',
					'Mes prochains rendez-vous',
				);
			});

			it('Good content for Done Appointments', () => {
				cy.get('#edgar-dashboardAppointmentsPage-doneAppointments-text').should(
					'contain.text',
					'Mes rendez-vous passés',
				);
			});
		});

		describe('Visible elements', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Visible buttons', () => {
				cy.get('#edgar-dashboardAppointmentsPage-appointments-button').should('be.visible');
			});
		});

		describe('Visible texts', () => {
			beforeEach(() => {
				cy.viewport(1920, 1080);
			});

			it('Next Appointments', () => {
				cy.get('#edgar-dashboardAppointmentsPage-nextAppointments-text').should('be.visible');
			});

			it('Done Appointments', () => {
				cy.get('#edgar-dashboardAppointmentsPage-doneAppointments-text').should('be.visible');
			});
		});
	});

	describe('Clean up', () => {
		// TODO: add backend call to destroy user
		beforeEach(() => {});
	});
});

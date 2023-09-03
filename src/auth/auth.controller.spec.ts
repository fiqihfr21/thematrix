import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { AppModule } from '../app.module';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  describe('signIn', () => {
    it('should sign in a user', async () => {
      const loginCredentialsDto: LoginCredentialsDto = {
        username: 'testuser',
        password: 'testpassword',
      };

      const accessToken = 'mockAccessToken';
      jest.spyOn(authService, 'signIn').mockResolvedValue({ accessToken });

      const result = await authController.signIn(loginCredentialsDto);

      expect(authService.signIn).toHaveBeenCalledWith(loginCredentialsDto);

      expect(result).toEqual({ accessToken });
    });
  });
});

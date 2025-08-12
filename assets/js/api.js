/* ==========================================================================
   API Layer - Mock API Functions with Promise-based Delays
   ========================================================================== */

// API namespace
window.LMS = window.LMS || {};

LMS.API = {
  // Configuration
  config: {
    baseDelay: 300,        // Base delay in ms
    maxDelay: 1000,        // Maximum delay in ms
    errorRate: 0,          // Simulated error rate (0-1)
    dataPath: '/data/'     // Path to JSON files
  },
  
  // Simulate network delay
  delay(min = this.config.baseDelay, max = this.config.maxDelay) {
    const ms = Math.floor(Math.random() * (max - min + 1)) + min;
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  
  // Simulate random errors
  shouldError() {
    return Math.random() < this.config.errorRate;
  },
  
  // Standard response format
  createResponse(success, data = null, error = null, meta = {}) {
    return {
      success,
      data,
      error,
      meta: {
        timestamp: new Date().toISOString(),
        ...meta
      }
    };
  },
  
  // Load JSON file
  async loadJSON(filename) {
    try {
      let dataPath;
      if (window.LMS_CONFIG && window.LMS_CONFIG.getBasePath) {
        const basePath = window.LMS_CONFIG.getBasePath();
        dataPath = `${basePath}/data/${filename}`;
      } else {
        // Fallback - check if we're in a subdirectory
        const path = window.location.pathname;
        if (path.includes('/pages/') || path.includes('/components/')) {
          dataPath = `../data/${filename}`;
        } else {
          dataPath = `data/${filename}`;
        }
      }
      
      const response = await fetch(dataPath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error loading ${filename}:`, error);
      throw error;
    }
  },
  
  /* ==========================================================================
     User Management APIs
     ========================================================================== */
  
  // Login
  async login(username, password, role) {
    await this.delay();
    
    if (this.shouldError()) {
      return this.createResponse(false, null, 'Network error occurred');
    }
    
    try {
      const users = await this.loadJSON('mock-users.json');
      const user = users.data.find(u => 
        u.username === username && 
        u.password === password && 
        u.role === role
      );
      
      if (user) {
        // Remove password from response
        const { password, ...userWithoutPassword } = user;
        return this.createResponse(true, {
          user: userWithoutPassword,
          token: `mock-token-${user.id}-${Date.now()}`
        });
      } else {
        return this.createResponse(false, null, 'Invalid credentials');
      }
    } catch (error) {
      return this.createResponse(false, null, error.message);
    }
  },
  
  // Register
  async register(userData) {
    await this.delay();
    
    if (this.shouldError()) {
      return this.createResponse(false, null, 'Network error occurred');
    }
    
    try {
      // Check if username already exists
      const users = await this.loadJSON('mock-users.json');
      const exists = users.data.some(u => u.username === userData.username);
      
      if (exists) {
        return this.createResponse(false, null, 'Username already exists');
      }
      
      // Create new user
      const newUser = {
        id: LMS.Utils.generateId('user'),
        ...userData,
        createdAt: new Date().toISOString(),
        lastLogin: null,
        isActive: true
      };
      
      // In real app, this would save to database
      // For now, just return success
      return this.createResponse(true, {
        user: newUser,
        message: 'Registration successful'
      });
    } catch (error) {
      return this.createResponse(false, null, error.message);
    }
  },
  
  // Get users (admin)
  async getUsers(filters = {}) {
    await this.delay();
    
    if (this.shouldError()) {
      return this.createResponse(false, null, 'Network error occurred');
    }
    
    try {
      const users = await this.loadJSON('mock-users.json');
      let filteredUsers = [...users.data];
      
      // Apply filters
      if (filters.role) {
        filteredUsers = filteredUsers.filter(u => u.role === filters.role);
      }
      
      if (filters.search) {
        const search = filters.search.toLowerCase();
        filteredUsers = filteredUsers.filter(u => 
          u.username.toLowerCase().includes(search) ||
          u.email.toLowerCase().includes(search) ||
          u.fullName.toLowerCase().includes(search)
        );
      }
      
      if (filters.isActive !== undefined) {
        filteredUsers = filteredUsers.filter(u => u.isActive === filters.isActive);
      }
      
      // Pagination
      const page = filters.page || 1;
      const limit = filters.limit || 10;
      const start = (page - 1) * limit;
      const end = start + limit;
      
      const paginatedUsers = filteredUsers.slice(start, end);
      
      return this.createResponse(true, paginatedUsers, null, {
        total: filteredUsers.length,
        page,
        limit,
        totalPages: Math.ceil(filteredUsers.length / limit)
      });
    } catch (error) {
      return this.createResponse(false, null, error.message);
    }
  },
  
  // Get user profile
  async getUserProfile(userId) {
    await this.delay();
    
    if (this.shouldError()) {
      return this.createResponse(false, null, 'Network error occurred');
    }
    
    try {
      const users = await this.loadJSON('mock-users.json');
      const user = users.data.find(u => u.id === userId);
      
      if (user) {
        const { password, ...userProfile } = user;
        return this.createResponse(true, userProfile);
      } else {
        return this.createResponse(false, null, 'User not found');
      }
    } catch (error) {
      return this.createResponse(false, null, error.message);
    }
  },
  
  // Update user profile
  async updateUserProfile(userId, updates) {
    await this.delay();
    
    if (this.shouldError()) {
      return this.createResponse(false, null, 'Network error occurred');
    }
    
    // In real app, this would update database
    // For now, just return success with updated data
    const updatedUser = {
      id: userId,
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    return this.createResponse(true, updatedUser, null, {
      message: 'Profile updated successfully'
    });
  },
  
  /* ==========================================================================
     Course Management APIs
     ========================================================================== */
  
  // Get courses
  async getCourses(filters = {}) {
    await this.delay();
    
    if (this.shouldError()) {
      return this.createResponse(false, null, 'Network error occurred');
    }
    
    try {
      const courses = await this.loadJSON('mock-courses.json');
      let filteredCourses = [...courses.data];
      
      // Apply filters
      if (filters.category) {
        filteredCourses = filteredCourses.filter(c => c.categoryId === filters.category);
      }
      
      if (filters.search) {
        const search = filters.search.toLowerCase();
        filteredCourses = filteredCourses.filter(c => 
          c.title.toLowerCase().includes(search) ||
          c.description.toLowerCase().includes(search)
        );
      }
      
      if (filters.status) {
        filteredCourses = filteredCourses.filter(c => c.status === filters.status);
      }
      
      if (filters.teacherId) {
        filteredCourses = filteredCourses.filter(c => c.teacherId === filters.teacherId);
      }
      
      // Sorting
      if (filters.sortBy) {
        filteredCourses.sort((a, b) => {
          switch (filters.sortBy) {
            case 'title':
              return a.title.localeCompare(b.title);
            case 'created':
              return new Date(b.createdAt) - new Date(a.createdAt);
            case 'students':
              return b.enrolledCount - a.enrolledCount;
            default:
              return 0;
          }
        });
      }
      
      // Pagination
      const page = filters.page || 1;
      const limit = filters.limit || 12;
      const start = (page - 1) * limit;
      const end = start + limit;
      
      const paginatedCourses = filteredCourses.slice(start, end);
      
      return this.createResponse(true, paginatedCourses, null, {
        total: filteredCourses.length,
        page,
        limit,
        totalPages: Math.ceil(filteredCourses.length / limit)
      });
    } catch (error) {
      return this.createResponse(false, null, error.message);
    }
  },
  
  // Get course details
  async getCourse(courseId) {
    await this.delay();
    
    if (this.shouldError()) {
      return this.createResponse(false, null, 'Network error occurred');
    }
    
    try {
      const courses = await this.loadJSON('mock-courses.json');
      const course = courses.data.find(c => c.id === courseId);
      
      if (course) {
        // Load lessons for this course
        const lessons = await this.loadJSON('mock-lessons.json');
        course.lessons = lessons.data.filter(l => l.courseId === courseId);
        
        return this.createResponse(true, course);
      } else {
        return this.createResponse(false, null, 'Course not found');
      }
    } catch (error) {
      return this.createResponse(false, null, error.message);
    }
  },
  
  // Create course
  async createCourse(courseData) {
    await this.delay();
    
    if (this.shouldError()) {
      return this.createResponse(false, null, 'Network error occurred');
    }
    
    const newCourse = {
      id: LMS.Utils.generateId('course'),
      ...courseData,
      enrolledCount: 0,
      rating: 0,
      reviewCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    return this.createResponse(true, newCourse, null, {
      message: 'Course created successfully'
    });
  },
  
  // Update course
  async updateCourse(courseId, updates) {
    await this.delay();
    
    if (this.shouldError()) {
      return this.createResponse(false, null, 'Network error occurred');
    }
    
    const updatedCourse = {
      id: courseId,
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    return this.createResponse(true, updatedCourse, null, {
      message: 'Course updated successfully'
    });
  },
  
  /* ==========================================================================
     Quiz Management APIs
     ========================================================================== */
  
  // Get quizzes
  async getQuizzes(filters = {}) {
    await this.delay();
    
    if (this.shouldError()) {
      return this.createResponse(false, null, 'Network error occurred');
    }
    
    try {
      const quizzes = await this.loadJSON('mock-quizzes.json');
      let filteredQuizzes = [...quizzes.data];
      
      // Apply filters
      if (filters.courseId) {
        filteredQuizzes = filteredQuizzes.filter(q => q.courseId === filters.courseId);
      }
      
      if (filters.status) {
        filteredQuizzes = filteredQuizzes.filter(q => q.status === filters.status);
      }
      
      // Pagination
      const page = filters.page || 1;
      const limit = filters.limit || 10;
      const start = (page - 1) * limit;
      const end = start + limit;
      
      const paginatedQuizzes = filteredQuizzes.slice(start, end);
      
      return this.createResponse(true, paginatedQuizzes, null, {
        total: filteredQuizzes.length,
        page,
        limit,
        totalPages: Math.ceil(filteredQuizzes.length / limit)
      });
    } catch (error) {
      return this.createResponse(false, null, error.message);
    }
  },
  
  // Get quiz details
  async getQuiz(quizId) {
    await this.delay();
    
    if (this.shouldError()) {
      return this.createResponse(false, null, 'Network error occurred');
    }
    
    try {
      const quizzes = await this.loadJSON('mock-quizzes.json');
      const quiz = quizzes.data.find(q => q.id === quizId);
      
      if (quiz) {
        // Load questions for this quiz
        const questions = await this.loadJSON('mock-questions.json');
        quiz.questions = questions.data.filter(q => quiz.questionIds.includes(q.id));
        
        return this.createResponse(true, quiz);
      } else {
        return this.createResponse(false, null, 'Quiz not found');
      }
    } catch (error) {
      return this.createResponse(false, null, error.message);
    }
  },
  
  // Submit quiz
  async submitQuiz(quizId, answers) {
    await this.delay();
    
    if (this.shouldError()) {
      return this.createResponse(false, null, 'Network error occurred');
    }
    
    try {
      // Calculate score (mock implementation)
      const quiz = await this.getQuiz(quizId);
      if (!quiz.success) {
        return quiz;
      }
      
      let score = 0;
      const results = quiz.data.questions.map(question => {
        const userAnswer = answers[question.id];
        const isCorrect = userAnswer === question.correctAnswer;
        if (isCorrect) score += question.points;
        
        return {
          questionId: question.id,
          userAnswer,
          correctAnswer: question.correctAnswer,
          isCorrect,
          points: isCorrect ? question.points : 0
        };
      });
      
      const totalPoints = quiz.data.questions.reduce((sum, q) => sum + q.points, 0);
      const percentage = Math.round((score / totalPoints) * 100);
      const passed = percentage >= quiz.data.passingScore;
      
      const submission = {
        id: LMS.Utils.generateId('submission'),
        quizId,
        userId: 'current-user', // Would come from auth
        score,
        totalPoints,
        percentage,
        passed,
        results,
        submittedAt: new Date().toISOString()
      };
      
      return this.createResponse(true, submission, null, {
        message: passed ? 'Congratulations! You passed the quiz.' : 'You did not pass. Try again!'
      });
    } catch (error) {
      return this.createResponse(false, null, error.message);
    }
  },
  
  /* ==========================================================================
     Progress Tracking APIs
     ========================================================================== */
  
  // Get user progress
  async getUserProgress(userId, courseId = null) {
    await this.delay();
    
    if (this.shouldError()) {
      return this.createResponse(false, null, 'Network error occurred');
    }
    
    try {
      const progress = await this.loadJSON('mock-progress.json');
      let userProgress = progress.data.filter(p => p.userId === userId);
      
      if (courseId) {
        userProgress = userProgress.filter(p => p.courseId === courseId);
      }
      
      return this.createResponse(true, userProgress);
    } catch (error) {
      return this.createResponse(false, null, error.message);
    }
  },
  
  // Update lesson progress
  async updateLessonProgress(userId, lessonId, progress) {
    await this.delay();
    
    if (this.shouldError()) {
      return this.createResponse(false, null, 'Network error occurred');
    }
    
    const progressData = {
      id: LMS.Utils.generateId('progress'),
      userId,
      lessonId,
      ...progress,
      updatedAt: new Date().toISOString()
    };
    
    return this.createResponse(true, progressData, null, {
      message: 'Progress updated'
    });
  },
  
  /* ==========================================================================
     Error Handling
     ========================================================================== */
  
  // Handle API errors consistently
  handleError(error) {
    console.error('API Error:', error);
    
    // Check if it's already our response format
    if (error && typeof error === 'object' && 'success' in error) {
      return error;
    }
    
    // Convert to our format
    return this.createResponse(false, null, error.message || 'An unexpected error occurred');
  }
};

// Export API
window.LMS.API = LMS.API;

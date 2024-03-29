package error

import (
	"fmt"
	"net/http"

	"github.com/cockroachdb/errors"
)

type appErr struct {
	error
	msg      string
	trace    error
	statusCd int
}

type BadRequestErr struct {
	*appErr
}

type NotFoundErr struct {
	*appErr
}

type InternalServerErr struct {
	*appErr
}

func (e *appErr) Msg() string {
	return e.msg
}

func (e *appErr) Trace() error {
	return e.trace
}

func (e *appErr) StatusCd() int {
	return e.statusCd
}

func BadRequestWrapf(format string, args ...any) *BadRequestErr {
	err := &appErr{
		statusCd: http.StatusBadRequest,
	}

	if args == nil {
		err.msg = format
		err.trace = errors.Errorf("%+v", errors.New(format))
		return &BadRequestErr{err}
	}

	err.msg = fmt.Sprintf(format, args...)
	err.trace = errors.Errorf("%+v", errors.Errorf(format, args...))
	return &BadRequestErr{err}
}

func NotFoundWrapf(format string, args ...any) *NotFoundErr {
	err := &appErr{
		statusCd: http.StatusNotFound,
	}

	if args == nil {
		err.msg = format
		err.trace = errors.Errorf("%+v", errors.New(format))
		return &NotFoundErr{err}
	}

	err.msg = fmt.Sprintf(format, args...)
	err.trace = errors.Errorf("%+v", errors.Errorf(format, args...))
	return &NotFoundErr{err}
}

func InternalServerWrapf(format string, args ...any) *InternalServerErr {
	err := &appErr{
		statusCd: http.StatusInternalServerError,
	}

	if args == nil {
		err.msg = format
		err.trace = errors.Errorf("%+v", errors.New(format))
		return &InternalServerErr{err}
	}

	err.msg = fmt.Sprintf(format, args...)
	err.trace = errors.Errorf("%+v", errors.Errorf(format, args...))
	return &InternalServerErr{err}
}
